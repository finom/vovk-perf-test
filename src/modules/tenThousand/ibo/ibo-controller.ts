import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ibo")
export default class IboController {
  @operation({
    summary: "Get Ibo",
  })
  @get()
  static getIbo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ibo",
  })
  @post("{id}")
  static createIbo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
