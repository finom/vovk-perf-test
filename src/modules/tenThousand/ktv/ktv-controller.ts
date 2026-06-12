import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ktv")
export default class KtvController {
  @operation({
    summary: "Get Ktv",
  })
  @get()
  static getKtv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ktv",
  })
  @post("{id}")
  static createKtv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
