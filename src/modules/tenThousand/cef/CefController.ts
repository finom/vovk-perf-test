import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cef")
export default class CefController {
  @operation({
    summary: "Get Cef",
  })
  @get()
  static getCef = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cef",
  })
  @post("{id}")
  static createCef = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
