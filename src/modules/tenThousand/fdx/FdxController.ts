import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fdx")
export default class FdxController {
  @operation({
    summary: "Get Fdx",
  })
  @get()
  static getFdx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fdx",
  })
  @post("{id}")
  static createFdx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
