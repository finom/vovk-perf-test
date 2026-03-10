import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ayz")
export default class AyzController {
  @operation({
    summary: "Get Ayz",
  })
  @get()
  static getAyz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ayz",
  })
  @post("{id}")
  static createAyz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
