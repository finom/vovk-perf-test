import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("etu")
export default class EtuController {
  @operation({
    summary: "Get Etu",
  })
  @get()
  static getEtu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Etu",
  })
  @post("{id}")
  static createEtu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
