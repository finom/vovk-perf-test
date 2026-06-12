import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kou")
export default class KouController {
  @operation({
    summary: "Get Kou",
  })
  @get()
  static getKou = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kou",
  })
  @post("{id}")
  static createKou = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
