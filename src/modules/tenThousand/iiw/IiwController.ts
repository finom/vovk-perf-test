import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iiw")
export default class IiwController {
  @operation({
    summary: "Get Iiw",
  })
  @get()
  static getIiw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iiw",
  })
  @post("{id}")
  static createIiw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
