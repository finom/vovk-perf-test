import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ce")
export default class CeController {
  @operation({
    summary: "Get Ce",
  })
  @get()
  static getCe = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ce",
  })
  @post("{id}")
  static createCe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
