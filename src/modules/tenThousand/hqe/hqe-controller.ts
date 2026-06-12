import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hqe")
export default class HqeController {
  @operation({
    summary: "Get Hqe",
  })
  @get()
  static getHqe = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hqe",
  })
  @post("{id}")
  static createHqe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
