import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dse")
export default class DseController {
  @operation({
    summary: "Get Dse",
  })
  @get()
  static getDse = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dse",
  })
  @post("{id}")
  static createDse = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
