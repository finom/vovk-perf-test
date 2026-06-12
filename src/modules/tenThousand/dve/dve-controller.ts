import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dve")
export default class DveController {
  @operation({
    summary: "Get Dve",
  })
  @get()
  static getDve = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dve",
  })
  @post("{id}")
  static createDve = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
