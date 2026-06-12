import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dav")
export default class DavController {
  @operation({
    summary: "Get Dav",
  })
  @get()
  static getDav = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dav",
  })
  @post("{id}")
  static createDav = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
