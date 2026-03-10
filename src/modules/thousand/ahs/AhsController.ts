import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ahs")
export default class AhsController {
  @operation({
    summary: "Get Ahs",
  })
  @get()
  static getAhs = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ahs",
  })
  @post("{id}")
  static createAhs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
