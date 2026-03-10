import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hox")
export default class HoxController {
  @operation({
    summary: "Get Hox",
  })
  @get()
  static getHox = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hox",
  })
  @post("{id}")
  static createHox = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
