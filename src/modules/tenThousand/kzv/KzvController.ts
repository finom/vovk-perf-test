import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kzv")
export default class KzvController {
  @operation({
    summary: "Get Kzv",
  })
  @get()
  static getKzv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kzv",
  })
  @post("{id}")
  static createKzv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
