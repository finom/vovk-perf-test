import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ahj")
export default class AhjController {
  @operation({
    summary: "Get Ahj",
  })
  @get()
  static getAhj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ahj",
  })
  @post("{id}")
  static createAhj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
