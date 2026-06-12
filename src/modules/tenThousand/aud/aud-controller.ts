import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aud")
export default class AudController {
  @operation({
    summary: "Get Aud",
  })
  @get()
  static getAud = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Aud",
  })
  @post("{id}")
  static createAud = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
