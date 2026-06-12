import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aqt")
export default class AqtController {
  @operation({
    summary: "Get Aqt",
  })
  @get()
  static getAqt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Aqt",
  })
  @post("{id}")
  static createAqt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
