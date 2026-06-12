import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hsi")
export default class HsiController {
  @operation({
    summary: "Get Hsi",
  })
  @get()
  static getHsi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hsi",
  })
  @post("{id}")
  static createHsi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
