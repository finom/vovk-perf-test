import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kho")
export default class KhoController {
  @operation({
    summary: "Get Kho",
  })
  @get()
  static getKho = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kho",
  })
  @post("{id}")
  static createKho = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
