import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kjq")
export default class KjqController {
  @operation({
    summary: "Get Kjq",
  })
  @get()
  static getKjq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kjq",
  })
  @post("{id}")
  static createKjq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
