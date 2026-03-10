import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hql")
export default class HqlController {
  @operation({
    summary: "Get Hql",
  })
  @get()
  static getHql = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hql",
  })
  @post("{id}")
  static createHql = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
