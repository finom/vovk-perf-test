import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hvn")
export default class HvnController {
  @operation({
    summary: "Get Hvn",
  })
  @get()
  static getHvn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hvn",
  })
  @post("{id}")
  static createHvn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
