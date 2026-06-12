import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ldk")
export default class LdkController {
  @operation({
    summary: "Get Ldk",
  })
  @get()
  static getLdk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ldk",
  })
  @post("{id}")
  static createLdk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
