import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kna")
export default class KnaController {
  @operation({
    summary: "Get Kna",
  })
  @get()
  static getKna = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kna",
  })
  @post("{id}")
  static createKna = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
