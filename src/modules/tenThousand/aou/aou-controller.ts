import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aou")
export default class AouController {
  @operation({
    summary: "Get Aou",
  })
  @get()
  static getAou = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Aou",
  })
  @post("{id}")
  static createAou = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
