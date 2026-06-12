import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hqt")
export default class HqtController {
  @operation({
    summary: "Get Hqt",
  })
  @get()
  static getHqt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hqt",
  })
  @post("{id}")
  static createHqt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
