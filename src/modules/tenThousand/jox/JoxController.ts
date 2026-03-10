import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jox")
export default class JoxController {
  @operation({
    summary: "Get Jox",
  })
  @get()
  static getJox = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jox",
  })
  @post("{id}")
  static createJox = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
