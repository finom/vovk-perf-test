import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gie")
export default class GieController {
  @operation({
    summary: "Get Gie",
  })
  @get()
  static getGie = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gie",
  })
  @post("{id}")
  static createGie = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
