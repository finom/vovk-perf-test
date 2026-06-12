import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("auh")
export default class AuhController {
  @operation({
    summary: "Get Auh",
  })
  @get()
  static getAuh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Auh",
  })
  @post("{id}")
  static createAuh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
