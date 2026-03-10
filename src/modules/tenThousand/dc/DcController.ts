import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dc")
export default class DcController {
  @operation({
    summary: "Get Dc",
  })
  @get()
  static getDc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dc",
  })
  @post("{id}")
  static createDc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
