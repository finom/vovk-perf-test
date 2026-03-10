import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("krh")
export default class KrhController {
  @operation({
    summary: "Get Krh",
  })
  @get()
  static getKrh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Krh",
  })
  @post("{id}")
  static createKrh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
