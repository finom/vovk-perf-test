import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hnw")
export default class HnwController {
  @operation({
    summary: "Get Hnw",
  })
  @get()
  static getHnw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hnw",
  })
  @post("{id}")
  static createHnw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
