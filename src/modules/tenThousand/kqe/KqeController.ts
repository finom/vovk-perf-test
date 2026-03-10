import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kqe")
export default class KqeController {
  @operation({
    summary: "Get Kqe",
  })
  @get()
  static getKqe = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kqe",
  })
  @post("{id}")
  static createKqe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
