import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iez")
export default class IezController {
  @operation({
    summary: "Get Iez",
  })
  @get()
  static getIez = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iez",
  })
  @post("{id}")
  static createIez = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
