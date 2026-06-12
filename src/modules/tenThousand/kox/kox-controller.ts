import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kox")
export default class KoxController {
  @operation({
    summary: "Get Kox",
  })
  @get()
  static getKox = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kox",
  })
  @post("{id}")
  static createKox = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
