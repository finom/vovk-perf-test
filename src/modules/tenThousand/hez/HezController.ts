import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hez")
export default class HezController {
  @operation({
    summary: "Get Hez",
  })
  @get()
  static getHez = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hez",
  })
  @post("{id}")
  static createHez = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
