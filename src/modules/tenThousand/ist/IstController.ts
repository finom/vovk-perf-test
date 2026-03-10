import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ist")
export default class IstController {
  @operation({
    summary: "Get Ist",
  })
  @get()
  static getIst = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ist",
  })
  @post("{id}")
  static createIst = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
