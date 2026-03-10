import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("chx")
export default class ChxController {
  @operation({
    summary: "Get Chx",
  })
  @get()
  static getChx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Chx",
  })
  @post("{id}")
  static createChx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
