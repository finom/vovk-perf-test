import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kxi")
export default class KxiController {
  @operation({
    summary: "Get Kxi",
  })
  @get()
  static getKxi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kxi",
  })
  @post("{id}")
  static createKxi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
