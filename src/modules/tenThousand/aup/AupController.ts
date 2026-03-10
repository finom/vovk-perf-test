import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aup")
export default class AupController {
  @operation({
    summary: "Get Aup",
  })
  @get()
  static getAup = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Aup",
  })
  @post("{id}")
  static createAup = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
