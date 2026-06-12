import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fdv")
export default class FdvController {
  @operation({
    summary: "Get Fdv",
  })
  @get()
  static getFdv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fdv",
  })
  @post("{id}")
  static createFdv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
