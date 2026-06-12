import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ane")
export default class AneController {
  @operation({
    summary: "Get Ane",
  })
  @get()
  static getAne = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ane",
  })
  @post("{id}")
  static createAne = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
