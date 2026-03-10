import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("enc")
export default class EncController {
  @operation({
    summary: "Get Enc",
  })
  @get()
  static getEnc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Enc",
  })
  @post("{id}")
  static createEnc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
