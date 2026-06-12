import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ekk")
export default class EkkController {
  @operation({
    summary: "Get Ekk",
  })
  @get()
  static getEkk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ekk",
  })
  @post("{id}")
  static createEkk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
