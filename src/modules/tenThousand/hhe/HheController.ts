import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hhe")
export default class HheController {
  @operation({
    summary: "Get Hhe",
  })
  @get()
  static getHhe = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hhe",
  })
  @post("{id}")
  static createHhe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
