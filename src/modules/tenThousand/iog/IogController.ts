import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iog")
export default class IogController {
  @operation({
    summary: "Get Iog",
  })
  @get()
  static getIog = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iog",
  })
  @post("{id}")
  static createIog = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
