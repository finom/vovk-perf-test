import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("isi")
export default class IsiController {
  @operation({
    summary: "Get Isi",
  })
  @get()
  static getIsi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Isi",
  })
  @post("{id}")
  static createIsi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
