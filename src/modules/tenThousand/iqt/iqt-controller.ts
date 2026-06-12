import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iqt")
export default class IqtController {
  @operation({
    summary: "Get Iqt",
  })
  @get()
  static getIqt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iqt",
  })
  @post("{id}")
  static createIqt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
