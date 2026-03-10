import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kdk")
export default class KdkController {
  @operation({
    summary: "Get Kdk",
  })
  @get()
  static getKdk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kdk",
  })
  @post("{id}")
  static createKdk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
