import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("huc")
export default class HucController {
  @operation({
    summary: "Get Huc",
  })
  @get()
  static getHuc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Huc",
  })
  @post("{id}")
  static createHuc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
