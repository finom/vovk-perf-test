import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mk")
export default class MkController {
  @operation({
    summary: "Get Mk",
  })
  @get()
  static getMk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mk",
  })
  @post("{id}")
  static createMk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
