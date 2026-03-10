import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("krv")
export default class KrvController {
  @operation({
    summary: "Get Krv",
  })
  @get()
  static getKrv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Krv",
  })
  @post("{id}")
  static createKrv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
