import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kkk")
export default class KkkController {
  @operation({
    summary: "Get Kkk",
  })
  @get()
  static getKkk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kkk",
  })
  @post("{id}")
  static createKkk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
